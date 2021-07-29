
class UserController < ApplicationController
    def create
        begin
            if params[:email].empty? || params[:password].empty?
                render json: {error: 'Invalid Arguments.' }, status: 400
                return   
            end
            user = User.where(email: params[:email]).first
            if user
                render json: {error: 'User Already Exist.' }, status: 400
                return
            else
                newUser = User.create!(email: params[:email], password: params[:password])
                render json: {success: newUser.authentication_token}, status: 200
            end
        rescue ActiveRecord::RecordNotFound
            render :json => {error: "Can't Connect to the Database."}, status: 400
        end
    end

    def login
        begin 
            unless params[:email] && params[:password]
                render json: {error: 'Invalid Arguments.' }, status: 400
                return   
            end

            user = User.where(email: params[:email]).first
            if user && user.valid_password?(params[:password])
                render json: {success: user.authentication_token}, status: 200
            else
                render :json => {error: "Email or Password Incorrect."}, status: 400
            end
        rescue ActiveRecord::RecordNotFound
            render :json => {error: "Can't Connect to the Database."}, status: 400
        end
    end

    def destroy
        begin
            user = User.find_by(authentication_token: request.headers["access_token"])
            if user
                user.authentication_token = nil
                user.save
                render json: {success: "User Disconnected."}, status: 200
            else
                render :json => {error: "Invalid Token."}, status: 400 
            end
        rescue ActiveRecord::RecordNotFound
            render :json => {error: "Can't Connect to the Database."}, status: 400
        end
    end
end
