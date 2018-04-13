class Admin::ConvertersController < ApplicationController
  before_action :set_admin_converter, only: [:show, :edit, :update, :destroy]

  # GET /admin/converters
  # GET /admin/converters.json
  def index
    @admin_converters = Admin::Converter.all
  end

  # GET /admin/converters/1
  # GET /admin/converters/1.json
  def show
  end

  # GET /admin/converters/new
  def new
    @admin_converter = Admin::Converter.new
    @source_course = 1
  end

  # GET /admin/converters/1/edit
  def edit
    @selected_cash_a = @admin_converter.cash_a.id
    @selected_cash_b = @admin_converter.cash_b_id
    @source_course = @admin_converter.source_course
    @admin_converter.cryptocommission_str = (@admin_converter.cryptocommission / 1000.0).to_s
  end

  # POST /admin/converters
  # POST /admin/converters.json
  def create
    @admin_converter = Admin::Converter.new(admin_converter_params)
    @admin_converter.cash_a = Admin::Cash.find(params[:admin_converter][:cash_a])
    @admin_converter.cash_b = Admin::Cash.find(params[:admin_converter][:cash_b])
    @admin_converter.cryptocommission = params[:admin_converter][:cryptocommission_str].to_f * 1000
    respond_to do |format|
      if @admin_converter.save
      
        format.html { redirect_to @admin_converter, notice: 'Converter was successfully created.' }
        format.json { render :show, status: :created, location: @admin_converter }
      else
        format.html { render :new }
        format.json { render json: @admin_converter.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /admin/converters/1
  # PATCH/PUT /admin/converters/1.json
  def update
    respond_to do |format|
      @admin_converter.cash_a = Admin::Cash.find(params[:admin_converter][:cash_a])
      @admin_converter.cash_b = Admin::Cash.find(params[:admin_converter][:cash_b])
      @admin_converter.cryptocommission = params[:admin_converter][:cryptocommission_str].to_f * 1000
      if @admin_converter.update(admin_converter_params)
        format.html { redirect_to @admin_converter, notice: 'Converter was successfully updated.' }
        format.json { render :show, status: :ok, location: @admin_converter }
      else
        format.html { render :edit }
        format.json { render json: @admin_converter.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /admin/converters/1
  # DELETE /admin/converters/1.json
  def destroy
    @admin_converter.destroy
    respond_to do |format|
      format.html { redirect_to admin_converters_url, notice: 'Converter was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_admin_converter
      @admin_converter = Admin::Converter.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def admin_converter_params
      params.require(:admin_converter).permit(:coeff_procent, :source_course)
    end
end
