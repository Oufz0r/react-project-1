import React, { useState, useEffect } from 'react';
import Paragraph from '../components/Paragraph';
import Loading from '../components/Loading';

function Home() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        // Met à jour le State pour indiquer que le composant est monté
        setIsMounted(true);

        return () => {
            // Code de nettoyage à exécuter avant le démontage du composant
        };
    }, []);

    // Si le composant n'est pas encore monté on affiche un message de chargement
    if (!isMounted) {
        return <div><Loading /></div>;
    }

    return (
        <div id="Home">
            <div className='p-box'>
                <Paragraph pictureUrl="https://m.media-amazon.com/images/I/81K0PYTnlqL._AC_UF1000,1000_QL80_.jpg" pictureAlt='truc' picturePosition="right">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nibh sapien, hendrerit nec imperdiet vitae, convallis eget justo. Fusce congue nunc vel velit venenatis scelerisque. Etiam sit amet consectetur metus. Integer tincidunt, dolor nec auctor sollicitudin, mauris nulla elementum ligula, ut placerat felis mauris consequat dolor. Etiam dictum vitae felis a eleifend. Suspendisse sed nibh consequat, ultricies felis ut, lobortis arcu. Etiam nunc massa, vestibulum sit amet malesuada non, imperdiet sed nisi. Vivamus nec suscipit enim.
                    <br /><br />
                    Curabitur cursus tincidunt porta. Suspendisse viverra fringilla erat sit amet posuere. Pellentesque sit amet vulputate urna. Proin vitae nulla mauris. Mauris id augue quis quam lobortis ullamcorper. In scelerisque faucibus dictum. Duis congue mollis lacinia.
                    <br /><br />
                    Vestibulum ex elit, interdum vel turpis non, pharetra mattis felis. Nullam sagittis, felis vel finibus malesuada, leo ante auctor est, sit amet efficitur arcu est vehicula sem. Sed ornare, enim non pellentesque sodales, odio lacus pharetra nisl, in tempus elit massa eu lorem. Duis ac consectetur libero. Mauris tempus pellentesque risus, non lacinia ligula accumsan id. Suspendisse mollis, purus et tempor pharetra, diam tortor egestas odio, vitae aliquam mi quam sed mi. Vestibulum hendrerit pretium nulla, ac condimentum elit iaculis a. Donec dapibus augue ac est congue, et congue velit finibus.
                </Paragraph>
                <Paragraph pictureUrl="https://www.giftcampaign.fr/media/catalog/product/cache/1/image/666x/040ec09b1e35df139433887a97daa66f/4/0/40382.jpg" pictureAlt='truc' picturePosition="left">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nibh sapien, hendrerit nec imperdiet vitae, convallis eget justo. Fusce congue nunc vel velit venenatis scelerisque. Etiam sit amet consectetur metus. Integer tincidunt, dolor nec auctor sollicitudin, mauris nulla elementum ligula, ut placerat felis mauris consequat dolor. Etiam dictum vitae felis a eleifend. Suspendisse sed nibh consequat, ultricies felis ut, lobortis arcu. Etiam nunc massa, vestibulum sit amet malesuada non, imperdiet sed nisi. Vivamus nec suscipit enim.
                    <br /><br />
                    Curabitur cursus tincidunt porta. Suspendisse viverra fringilla erat sit amet posuere. Pellentesque sit amet vulputate urna. Proin vitae nulla mauris. Mauris id augue quis quam lobortis ullamcorper. In scelerisque faucibus dictum. Duis congue mollis lacinia.
                    <br /><br />
                    Vestibulum ex elit, interdum vel turpis non, pharetra mattis felis. Nullam sagittis, felis vel finibus malesuada, leo ante auctor est, sit amet efficitur arcu est vehicula sem. Sed ornare, enim non pellentesque sodales, odio lacus pharetra nisl, in tempus elit massa eu lorem. Duis ac consectetur libero. Mauris tempus pellentesque risus, non lacinia ligula accumsan id. Suspendisse mollis, purus et tempor pharetra, diam tortor egestas odio, vitae aliquam mi quam sed mi. Vestibulum hendrerit pretium nulla, ac condimentum elit iaculis a. Donec dapibus augue ac est congue, et congue velit finibus.
                </Paragraph>
            </div>
        </div>
        );
    }
    
export default Home;