import '../css/StarBackground.css'

interface Star {
  id: number
  left: number
  top: number
  delay: number
}

function StarBackground() {
  const star_denisity = 0.0005; // Adjust this value to increase/decrease star density
  const star_count = document.documentElement.clientWidth * document.documentElement.clientHeight * star_denisity;
  const stars: Star[] = Array.from({ length: star_count }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    delay: (Math.random() * 3) - 3,
  }))

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
