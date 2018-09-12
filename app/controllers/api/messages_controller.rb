class Api::MessagesController < ApplicationController
    def create
        message = Message.create(content: params[:content])
    end
end
