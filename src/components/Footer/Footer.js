const Footer = () =>{
    const currentYear = `© ${new Date().getFullYear()}, Darek Mazur`
    return(`
        <footer>
            <h3>${currentYear}</h3>
        </footer>
    `)
}

export default Footer()