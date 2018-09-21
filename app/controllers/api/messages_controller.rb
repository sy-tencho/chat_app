class Api::MessagesController < ApplicationController
    before_action :authenticate_user

    def create
        @message = Message.create(content: params[:content])
        render json: {content: @message}
    end

    def index
        @user = Message.find_by(id: 1)
        @message = @user.content
        render json: {content: @message}
    end

    def set_current_user
        @current_user = user_session[:user]
    end

    def authenticate_user    
        if @current_user == nil
            redirect_to '/users/sign_in'  
        end  
    end
end