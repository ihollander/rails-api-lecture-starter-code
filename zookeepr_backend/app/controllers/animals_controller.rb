class AnimalsController < ApplicationController
  def index
    @animals = Animal.all
    # render index.erb
    render json: @animals
    # render json: AnimalSerializer.new(@animals)
  end

  def show
    @animal = Animal.find_by(id: params[:id])
    render json: @animal
  end

  def create
    @species = Species.find_or_create_by(name: params[:speciesName])
    @animal = Animal.create(species: @species, name: params[:name], diet: params[:diet].to_i)
    render json: @animal
  end
end
