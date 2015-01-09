class AislesController < ApplicationController
  before_action :set_aisle, only: [:show, :edit, :update, :destroy]

  # GET /aisles
  # GET /aisles.json
  def index
    @aisles = Aisle.all
  end

  # GET /aisles/1
  # GET /aisles/1.json
  def show
  end

  # GET /aisles/new
  def new
    @aisle = Aisle.new
  end

  # GET /aisles/1/edit
  def edit
  end

  # POST /aisles
  # POST /aisles.json
  def create
    @aisle = Aisle.new(aisle_params)

    respond_to do |format|
      if @aisle.save
        format.html { redirect_to @aisle, notice: 'Aisle was successfully created.' }
        format.json { render :show, status: :created, location: @aisle }
      else
        format.html { render :new }
        format.json { render json: @aisle.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /aisles/1
  # PATCH/PUT /aisles/1.json
  def update
    respond_to do |format|
      if @aisle.update(aisle_params)
        format.html { redirect_to @aisle, notice: 'Aisle was successfully updated.' }
        format.json { render :show, status: :ok, location: @aisle }
      else
        format.html { render :edit }
        format.json { render json: @aisle.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /aisles/1
  # DELETE /aisles/1.json
  def destroy
    @aisle.destroy
    respond_to do |format|
      format.html { redirect_to aisles_url, notice: 'Aisle was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_aisle
      @aisle = Aisle.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def aisle_params
      params.require(:aisle).permit(:dept_id, :store_id, :name)
    end
end
