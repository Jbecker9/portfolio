class CreateMessages < ActiveRecord::Migration[7.0]
  def change
    create_table :messages do |t|
      t.string :name
      t.string :email
      t.string :company
      t.string :message_subject
      t.string :message_contents

      t.timestamps
    end
  end
end
