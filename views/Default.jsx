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

                    {/* CSS */}

                    <link href ="/css/styles.css" rel="stylesheet"/>

                    {/* JavaScript & jQuery Links */}
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
                    {/* Bootstrap JS */}
    {/* <script src="https://code.jquery.com/jquery-3.5.1.js" integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc=" crossorigin="anonymous" defer></script> */}

    {/* <script src="/app.js"></script> */}

                    {/* Springs.ly title */}
                    <title>{this.props.title}</title>
            
                </head>
                
                <body>

                    <header>

                        <div className="menu">~<br/>~<br />~<br /></div><h1 className="logo">Springs.ly</h1>
                    
                    </header>

                    {this.props.children}
            

                </body>
            
            </html>

        )
    }
}

module.exports = Default;