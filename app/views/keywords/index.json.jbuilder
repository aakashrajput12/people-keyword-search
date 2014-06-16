json.array!(@keywords) do |keyword|
  json.extract! keyword, :id, :keyword_name
  json.url keyword_url(keyword, format: :json)
end
