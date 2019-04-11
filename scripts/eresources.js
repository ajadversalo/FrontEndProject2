function render(eresources) {
    for (var i=0; i<resources.length; i++) {
            document.write('<div class="card"><div class="card-header"><h3 class="name"><img src="' + eresources[i].image + '" width="100"><a href="');
            document.write(eresources[i].link + '">' + eresources[i].title + '</a></h3></div><div class="card-body">')
            document.write('<p class="card-text">' + eresources[i].description + '</p></div></div>')
    }
}

var resources = [
            { title: 'Microsoft SQL Server 2014 Express', link: 'https://www.microsoft.com/en-ca/download/details.aspx?id=42299', 
            description: 'Microsoft SQL Server 2014 Express is a powerful and reliable free data management system that delivers a rich and reliable data store for lightweight Web Sites and desktop applications.',
            image: 'images/microsoft-sql-server.svg' },
            
            { title: 'Visual Studio Community 2017', link: 'https://www.visualstudio.com/downloads/', 
            description: 'Free, fully-featured IDE for students, open-source and individual developers.',
            image: 'images/visual-studio.png'},
            
            { title: 'Visual Studio Code', link: 'https://code.visualstudio.com/download', 
            description: 'Free and open source. Integrated Git, debugging and extensions.' },
            
            { title: 'Eclipse OXYGEN', link: 'https://www.eclipse.org/downloads/', 
            description: 'Eclipse is an integrated development environment (IDE) used in computer programming, and is the most widely used Java IDE.' },
            
            { title: 'Brackets', link: 'http://brackets.io/', 
            description: "With focused visual tools and preprocessor support, Brackets is a modern text editor that makes it easy to design in the browser. It's crafted from the ground up for web designers and front-end developers." },
            
            { title: 'Android Studio', link: 'https://developer.android.com/studio/index.html', 
            description: 'Android Studio provides the fastest tools for building apps on every type of Android device.' },
            
            { title: 'Xcode 9', link: 'https://developer.apple.com/xcode/', 
            description: 'With everything you need to create amazing apps for Apple platforms, Xcode 9 is unbelievably quick and consistently smooth while editing even the largest files.' },
            
            { title: 'MongoDB', link: 'https://www.mongodb.com/download-center#community', 
            description: 'MongoDB is a document database with the scalability and flexibility that you want with the querying and indexing that you need' },
            
            { title: 'Node.js', link: 'https://nodejs.org/en/download/', 
            description: 'As an asynchronous event driven JavaScript runtime, Node is designed to build scalable network applications.' },
]

render(resources)