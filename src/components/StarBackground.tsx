import '../css/StarBackground.css'
import { Star } from '../models/Star'
import { StarArray } from '../services/StarArray'

function StarBackground() {
  const star_denisity = 0.0005; // Adjust this value to increase/decrease star density
  const star_count = document.documentElement.clientWidth * document.documentElement.clientHeight * star_denisity;
  const stars: Star[] = StarArray(star_count);

  return (
    <div className="star-background">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star"
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            animationDelay: `${star.delay}s`,
          }}
        />
      ))}
    </div>
  )
}

export default StarBackground
