class InhouseprocessController < ApplicationController

  def show
    @inhouseprocess = Inhouseprocess.find(params[:id])
    respond_to do |format|
      format.js { render text: @inhouseprocess.hourlyrate.to_f }
    end
  end
end
