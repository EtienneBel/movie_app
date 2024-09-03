import Logo from "@/components/logo/Logo";

export default function HomePage() {
  return (
    <>
      <div className="wallpaper_container">
        <nav className="navbar_home-page">
          <Logo />
          <div className="nav_right">
            <div className="nav_buttons">
              <button className="nav_join_button">Sign In</button>
            </div>
          </div>
        </nav>
        <div className="flex flex-row">
          <div className="basis-1/4"></div>
          <div className="basis-1/2">
            <h1 className="text-block-euy28770">
              Unlimited movies, TV shows, and more
            </h1>
            <p className="text-block-euy28771">
              Starts at USD 2.99. Cancel anytime.
            </p>
            <p className="text-block-euy28772">
              Ready to watch? Enter your email to create or restart your
              membership.
            </p>
            <div className="my-8 flex justify-center">
              <a href="/movies" className="btn_get_started">
                Get Started
              </a>
            </div>
          </div>
          <div className="basis-1/4"></div>
        </div>
      </div>
      <div className=""></div>
    </>
  );
}
