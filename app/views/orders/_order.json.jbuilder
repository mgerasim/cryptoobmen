json.extract! order, :id, :value_input, :value_output, :currency_input, :currency_output, :email, :fullname, :input_account, :output_account, :status, :agree, :created_at, :updated_at
json.url order_url(order, format: :json)
