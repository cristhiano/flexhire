class GraphqlController < ApplicationController
  def execute
    response = HTTParty.post(
      "https://flexhire.com/api/v2/graphql",
      headers: {
        "Content-Type" => "application/json",
        "FLEXHIRE-API-KEY" => request.headers['FLEXHIRE-API-KEY']
      },
      body: request.body.read
    )

    render json: response.body, status: response.code
  end
end
