class Api::FriendsController < ApplicationController
    def create 
        @user_id = current_user.id
        @friend = Friend.create(user_id: @user_id, connected_user_id: params[:connected_user_id])
        render json: @friend
    end

    def index
        @current_user = current_user.id
        @search_find_by_user_id = Friend.where(user_id: @current_user)
        @search_find_by_user_connected_id = Friend.where(connected_user_id: @current_user)

        # 友達のID
        friends_id = []
        #友達一覧
        friends_list = []

        @search_find_by_user_id.each do |array|
            friend_id = array.connected_user_id
            friend_find_by_my_id = array.user_id
            friends_id.push(friend_id)
            friends_id.push(friend_find_by_my_id)
        end

        @search_find_by_user_connected_id.each do |array|
            friend_id = array.connected_user_id
            friend_find_by_my_id = array.user_id
            friends_id.push(friend_id)
            friends_id.push(friend_find_by_my_id)
        end

        friends_id.each do |i|
            friend = User.find_by(id: i)
            unless friend.id == @current_user 
                friends_list.push(friend)
            end
        end

        friends_list_new = friends_list.uniq
        render json: friends_list_new

    end

    # how to write sql
    # User.where("(id = ?) OR (id = ?)", 11, 12)
end
