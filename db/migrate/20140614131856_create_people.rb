class CreatePeople < ActiveRecord::Migration
  def change
    create_table :people do |t|
      t.string :f_name
      t.string :l_name

      t.timestamps
    end
  end
end
