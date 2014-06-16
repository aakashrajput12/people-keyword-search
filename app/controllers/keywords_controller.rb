class KeywordsController < ApplicationController
  before_action :set_keyword, only: [:show, :edit, :update, :destroy]

  # GET /keywords
  # GET /keywords.json
  require 'net/http'
  require 'rexml/document'

  appId = "OBSen2EneGFFr2ajTWvwYEMw4DrUhc0PnywycaIqA7c" # Paste your real AppId here!
  search = "Lewis Hamilton"

  uri = URI.parse("http://api.search.live.net/xml.aspx?AppId=#{appId}&sources=Web&query=#{URI.escape(search)}")
  xml_response = Net::HTTP.get_response(uri).body
  doc = REXML::Document.new(xml_response)

  doc.elements.each("SearchResponse/web:Web/web:Results/web:WebResult") do |result| 
  
  p result.get_elements("web:Title")[0].text
  p result.get_elements("web:Description")[0].text
  p result.get_elements("web:Url")[0].text
  p result.get_elements("web:DisplayUrl")[0].text
  p result.get_elements("web:DateTime")[0].text
  p "--------------------------------------------------" 
 
end
  def index
   @keywords = keywords.search(params[:search])
  end
  
  def index
    @keywords = Keyword.all
  end

  # GET /keywords/1
  # GET /keywords/1.json
  def show
  end

  # GET /keywords/new
  def new
    @keyword = Keyword.new
  end

  # GET /keywords/1/edit
  def edit
  end

  # POST /keywords
  # POST /keywords.json
  def create
    @keyword = Keyword.new(keyword_params)

    respond_to do |format|
      if @keyword.save
        format.html { redirect_to @keyword, notice: 'Keyword was successfully created.' }
        format.json { render :show, status: :created, location: @keyword }
      else
        format.html { render :new }
        format.json { render json: @keyword.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /keywords/1
  # PATCH/PUT /keywords/1.json
  def update
    respond_to do |format|
      if @keyword.update(keyword_params)
        format.html { redirect_to @keyword, notice: 'Keyword was successfully updated.' }
        format.json { render :show, status: :ok, location: @keyword }
      else
        format.html { render :edit }
        format.json { render json: @keyword.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /keywords/1
  # DELETE /keywords/1.json
  def destroy
    @keyword.destroy
    respond_to do |format|
      format.html { redirect_to keywords_url, notice: 'Keyword was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_keyword
      @keyword = Keyword.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def keyword_params
      params.require(:keyword).permit(:keyword_name)
    end
end
