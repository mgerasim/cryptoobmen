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
  end

  # GET /admin/converters/1/edit
  def edit
  end

  # POST /admin/converters
  # POST /admin/converters.json
  def create
    @admin_converter = Admin::Converter.new(admin_converter_params)

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
      params.require(:admin_converter).permit(:coeff_procent)
    end
end
