import styles from './About.module.css';

const About = () => {
  return (
    <div className="max-w-6xl mx-auto space-y-4 px-8">
      <h1 className="text-2xl font-medium">About</h1>
      <p>
        Welcome to our movie database website! We are a team of passionate movie
        enthusiasts who have come together to create a one-stop destination for
        all your movie-related needs. Our website is designed to provide you
        with a comprehensive database of movies from all around the world, along
        with the latest news, reviews, and trailers. Our movie database is
        constantly updated with new releases, ensuring that you have access to
        the latest and greatest in the world of cinema. You can search for
        movies by title, director, actor, genre, or release date, making it easy
        to find the perfect movie for any occasion.
      </p>
      <p>
        In addition to our extensive movie database, we also offer a platform
        for movie lovers to connect and share their thoughts on the latest
        releases. Our community section includes a forum where you can discuss
        your favorite films with like-minded individuals and read reviews and
        ratings from other users. We also have a section dedicated to movie news
        and trailers, keeping you updated with the latest happenings in the
        world of cinema.
      </p>
      <p>
        Thank you for visiting our website and we hope you enjoy your time
        browsing through our movie database. If you have any feedback or
        suggestions, please feel free to contact us. We are always looking for
        ways to improve and enhance the user experience on our website. Happy
        browsing!
      </p>
      <h1 className="text-2xl font-medium">Advantage</h1>
      <div className="flex space-x-3">
        <div className={styles.numbers}>1</div>
        <p>
          Every year since 2008, the number of contributions to our database has
          increased (<a href="/2022">check out our last years wrap!</a>) With
          over 1,000,000 developers and companies using our platform, TMDb has
          become a premiere source for metadata.
        </p>
      </div>
      <div className="flex space-x-3">
        <div className={styles.numbers}>2</div>
        <p>
          Along with extensive metadata for movies, TV shows and people, we also
          offer one of the best selections of high resolution posters and
          fanart. On average, over 1,000 images are added every single day.
        </p>
      </div>
      <div className="flex space-x-3">
        <div className={styles.numbers}>3</div>
        <p>
          We&apos;re international. While we officially support 39 languages we
          also have extensive regional data. Every single day TMDb is used in
          over 180 countries.
        </p>
      </div>
      <div className="flex space-x-3">
        <div className={styles.numbers}>4</div>
        <p>
          Our community is second to none. Between our staff and community
          moderators, we&apos;re always here to help. We&apos;re passionate
          about making sure your experience on TMDb is nothing short of amazing.
        </p>
      </div>
    </div>
  );
};

export default About;
