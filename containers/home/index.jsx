import React from "react";

import FeaturedMovie from "@/components/featured-movie";
import Categories from "@/components/categories";
import MoviesSection from "@/components/movies-section";

const HomeContainer = ({
  categories = [],
  popularMovies = [],
  topRatedMovies = [],
  selectedCategory,
}) => {
  return (
    <div>
      <FeaturedMovie movie={selectedCategory?.movies[3] ?? topRatedMovies[4]} />
      <Categories categories={categories.slice(0, 7)} />
      {selectedCategory.movies.length > 0 && (
        <MoviesSection
          title={
            categories.find((genre) => `${genre.id}` === selectedCategory.id)
              .name
          }
          movies={selectedCategory.movies}
        />
      )}

      <MoviesSection
        title="Popular Films"
        movies={topRatedMovies.slice(0, 6)}
      />
      <MoviesSection
        title="Your Favourites"
        movies={popularMovies.slice(6, 12)}
      />
    </div>
  );
};

export default HomeContainer;
