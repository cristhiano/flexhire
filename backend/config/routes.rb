Rails.application.routes.draw do
  post "graphql" => "rails/graphql#execute", as: :graphql_execute
end
