class ObmenController < ApplicationController
  before_action :set_obman, only: [:show, :edit, :update, :destroy]

  # GET /obmen
  # GET /obmen.json
  def index
    @obmen = Obman.all
  end

  # GET /obmen/1
  # GET /obmen/1.json
  def show
  end

  # GET /obmen/new
  def new
    @obman = Obman.new
  end

  # GET /obmen/1/edit
  def edit
  end

  # POST /obmen
  # POST /obmen.json
  def create
    @obman = Obman.new(obman_params)

    respond_to do |format|
      if @obman.save
        format.html { redirect_to @obman, notice: 'Obman was successfully created.' }
        format.json { render :show, status: :created, location: @obman }
      else
        format.html { render :new }
        format.json { render json: @obman.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /obmen/1
  # PATCH/PUT /obmen/1.json
  def update
    respond_to do |format|
      if @obman.update(obman_params)
        format.html { redirect_to @obman, notice: 'Obman was successfully updated.' }
        format.json { render :show, status: :ok, location: @obman }
      else
        format.html { render :edit }
        format.json { render json: @obman.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /obmen/1
  # DELETE /obmen/1.json
  def destroy
    @obman.destroy
    respond_to do |format|
      format.html { redirect_to obmen_url, notice: 'Obman was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_obman
      @obman = Obman.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def obman_params
      params.require(:obman).permit(:value_input, :value_output, :currency_input, :currency_output, :email, :fullname, :input_account, :output_account, :status, :agree)
    end
end
