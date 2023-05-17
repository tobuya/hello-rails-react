class Api::GreetingsController < ApplicationController
  def index
    @greetings = Message.all
    render json: @greetings, status: :ok
  end
end
