class Api::MessagesController < ApplicationController
    def create
        @message = Message.create(content: params[:content])
        render json: {content: @message}
    end

    def index
        @user = Message.find_by(id: 1)
        @message = @user.content
        render json: {content: @message}
    end
end
