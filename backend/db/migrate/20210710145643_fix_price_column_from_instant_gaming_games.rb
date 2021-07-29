class FixPriceColumnFromInstantGamingGames < ActiveRecord::Migration[6.1]
  def change
    change_column :instant_gaming_games, :price, :number
  end
end
