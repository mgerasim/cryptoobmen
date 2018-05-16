# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20180510142145) do

  create_table "admin_cashes", force: :cascade do |t|
    t.string "code"
    t.string "name"
    t.string "icon"
    t.integer "category"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "admin_converters", force: :cascade do |t|
    t.integer "coeff_procent"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "cash_a_id"
    t.integer "cash_b_id"
    t.integer "cryptocommission"
    t.integer "source_course", default: 1
    t.float "course"
    t.index ["cash_a_id"], name: "index_admin_converters_on_cash_a_id"
    t.index ["cash_b_id"], name: "index_admin_converters_on_cash_b_id"
  end

# Could not dump table "banks" because of following StandardError
#   Unknown type 'attachment' for column 'logo'

  create_table "banks_currencies", id: false, force: :cascade do |t|
    t.integer "bank_id", null: false
    t.integer "currency_id", null: false
  end

  create_table "cryptocurrencies", force: :cascade do |t|
    t.string "code"
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "logo_file_name"
    t.string "logo_content_type"
    t.integer "logo_file_size"
    t.datetime "logo_updated_at"
  end

  create_table "currencies", force: :cascade do |t|
    t.string "code"
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "logo_file_name"
    t.string "logo_content_type"
    t.integer "logo_file_size"
    t.datetime "logo_updated_at"
  end

  create_table "exchanges", force: :cascade do |t|
    t.integer "currency_id"
    t.integer "cryptocurrency_id"
    t.decimal "course"
    t.integer "burse"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "coeff"
    t.float "coeffburse"
    t.datetime "coursed_at"
    t.index ["cryptocurrency_id", "currency_id"], name: "index_exchanges_on_cryptocurrency_id_and_currency_id", unique: true
    t.index ["cryptocurrency_id"], name: "index_exchanges_on_cryptocurrency_id"
    t.index ["currency_id"], name: "index_exchanges_on_currency_id"
  end

end
