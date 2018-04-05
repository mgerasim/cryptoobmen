class Admin::CashesController < ApplicationController
  before_action :set_admin_cash, only: [:show, :edit, :update, :destroy]

  # GET /admin/cashes
  # GET /admin/cashes.json
  def index
    @admin_cashes = Admin::Cash.all
  end

  # GET /admin/cashes/1
  # GET /admin/cashes/1.json
  def show
  end

  # GET /admin/cashes/new
  def new
    @admin_cash = Admin::Cash.new
    @category_id = 1
  end

  # GET /admin/cashes/1/edit
  def edit
    @category_id = @admin_cash.category
  end

  # POST /admin/cashes
  # POST /admin/cashes.json
  def create
    @admin_cash = Admin::Cash.new(admin_cash_params)

    respond_to do |format|
      if @admin_cash.save
        format.html { redirect_to @admin_cash, notice: 'Cash was successfully created.' }
        format.json { render :show, status: :created, location: @admin_cash }
      else
        format.html { render :new }
        format.json { render json: @admin_cash.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /admin/cashes/1
  # PATCH/PUT /admin/cashes/1.json
  def update
    respond_to do |format|
      if @admin_cash.update(admin_cash_params)
        format.html { redirect_to @admin_cash, notice: 'Cash was successfully updated.' }
        format.json { render :show, status: :ok, location: @admin_cash }
      else
        format.html { render :edit }
        format.json { render json: @admin_cash.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /admin/cashes/1
  # DELETE /admin/cashes/1.json
  def destroy
    @admin_cash.destroy
    respond_to do |format|
      format.html { redirect_to admin_cashes_url, notice: 'Cash was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_admin_cash
      @admin_cash = Admin::Cash.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def admin_cash_params
      params.require(:admin_cash).permit(:code, :name, :icon, :category)
    end
end
