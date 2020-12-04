class UpdateUsersImage < ActiveRecord::Migration[6.0]
  def change
    rename_column :users, :image_url, :img_url
  end
end
