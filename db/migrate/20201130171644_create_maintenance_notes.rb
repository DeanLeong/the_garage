class CreateMaintenanceNotes < ActiveRecord::Migration[6.0]
  def change
    create_table :maintenance_notes do |t|
      t.string :content
      t.references :motorcycle, null: false, foreign_key: true

      t.timestamps
    end
  end
end
