const React = require('react');

class Default extends React.Component {
    render() {
        return (
            <html lang="en" dir="ltr">
            
                <head>
            
                    <meta charSet="utf-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

                    {/* Font Library from Adobe Fonts: https://fonts.adobe.com/fonts/cooper-black */}

                    <link rel="stylesheet" href="https://use.typekit.net/tsy6pbe.css" />

                    {/* Font Library from Google Fonts: https://fonts.google.com/specimen/Lato?query=lato */}
                    <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400" rel="stylesheet" /> 

                    {/* CSS */}

                    <link href ="/css/styles.css" rel="stylesheet"/>

                    {/* JavaScript & jQuery Links */}
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
                    {/* Bootstrap JS */}
    {/* <script src="https://code.jquery.com/jquery-3.5.1.js" integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc=" crossorigin="anonymous" defer></script> */}

                    <script src="./js/app.js"></script>

                    {/* Springs.ly title */}
                    <title>{this.props.title}</title>
            
                </head>
                
                <body>

                    <header className="header-container">

                        <div className="menu">~<br/>~<br />~<br /></div><h1 className="logo"><a href="/springs">Springs.ly</a></h1>

                        <div>Sign in</div>
                    
                    </header>

                    {this.props.children}
            

                </body>
            
            </html>

        )
    }
}

module.exports = Default;