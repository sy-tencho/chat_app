class MessagesController < ApplicationController
  def index
    flash.keep[:notice] = "You need log in to start chating." unless user_signed_in?
    if user_signed_in? == false
      redirect_to '/users/sign_in'
    end
  end
end