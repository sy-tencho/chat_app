class Api::MessagesController < ApplicationController
    # before_action :authenticate_user

    def create
        @post_user_id = current_user.id
        @message = Message.create(content: params[:content], to_user_id: params[:to_user_id], post_user_id: @post_user_id)
        render json: @message
    end

    def index
        @current_user = current_user.id
        @array_message = []
        post_user_message = Message.where(post_user_id: current_user, to_user_id: params[:to_user_id]).order(created_at: :asc)
        to_user_message = Message.where(post_user_id: params[:to_user_id], to_user_id: current_user).order(created_at: :asc)

        post_user_message.each do |message|
            @array_message.push(message)
        end

        to_user_message.each do |message|
            @array_message.push(message)
        end

        @new_array = @array_message.sort_by {|a| a[:id]}

        render json: @new_array

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

# def index
#     @current_user = current_user.id
#     array_message = []
#     post_user_message = Message.where(post_user_id: current_user).order(created_at: :asc)
#     to_user_message = Message.where(to_user_id: params[:to_user_id]).order(created_at: :asc)

#     post_user_message.each do |message|
#         array_message.push(message)
#     end

#     to_user_message.each do |message|
#         array_message.push(message)
#     end

#     render json: array_message

# end