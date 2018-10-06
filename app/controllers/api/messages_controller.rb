class Api::MessagesController < ApplicationController
    # before_action :authenticate_user

    def create
        @post_user_id = current_user.id
        @message = Message.create(content: params[:content], to_user_id: params[:to_user_id], post_user_id: @post_user_id)
        render json: @message
    end

    def index
        @user = Message.find_by(id: 1)
        @message = @user.content
        render json: @message 
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