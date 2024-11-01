// Header.js
function Header() {
    return (
        <header style={{ display: 'flex', alignItems: 'center', padding: '10px', backgroundColor: '#f8f9fa' }}>
            <img src="/logo.png" alt="LiveMinds Logo" style={{ height: '50px', marginRight: '20px' }} />
            <h1 style={{ fontSize: '24px', margin: 0 }}>LiveMinds</h1>
            <nav style={{ marginLeft: 'auto' }}>
                <ul style={{ display: 'flex', listStyleType: 'none', margin: 0, padding: 0 }}>
                    <li style={{ margin: '0 10px' }}><a href="/">Home</a></li>
                    <li style={{ margin: '0 10px' }}><a href="/about">About</a></li>
                    <li style={{ margin: '0 10px' }}><a href="/contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}
// Ensure this line is present to export the Header component
export default Header;
