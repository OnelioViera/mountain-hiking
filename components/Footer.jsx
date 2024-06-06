const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="mt-auto bottom-0 z-50 py-8 bg-green-700 border-t-2 h-auto border-green-800">
      <div className="text-white text-center justify-center">
        <p>&copy; {currentYear} Colorado Springs Mountain Hiking</p>
      </div>
    </div>
  )
}

export default Footer
