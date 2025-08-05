
const Heading = ({children}: {children: React.ReactNode}) => {
  return (
    <div>
      <h2 className="mb-4" style={{ color: "#333", fontSize: "24px" }}>{children}</h2>
    </div>
  )
}

export default Heading
