class AnimalSerializer < ActiveModel::Serializer
  attributes :id, :name, :diet, :species_name
  # belongs_to :species

  # def species_name
  #   self.object.species.name
  # end

end


