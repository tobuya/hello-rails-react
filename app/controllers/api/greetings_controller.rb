class Api::GreetingsController < ApplicationController
  def random
    @greeting = Message.pluck(:content).sample
    render json: { greeting: @greeting }
  end
end
