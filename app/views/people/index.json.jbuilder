json.array!(@people) do |person|
  json.extract! person, :id, :f_name, :l_name
  json.url person_url(person, format: :json)
end
