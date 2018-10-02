class Api::FriendsController < ApplicationController
    def create 
        @user_id = current_user.id
        @friend = Friend.create(user_id: @user_id, connected_user_id: params[:connected_user_id])
        render json: @friend
    end
end
