import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './frame.css';

class IndexFrame extends Component{
    render(){
        return (
            <div className='styFrame'>
                <header className='styHeader'>
                    header
                </header>
                <aside className='styAside'>
                    left menu
                </aside>
                <div className='styMain'>
                    main content
                </div>
                <footer className='styFooter'>
                    foot
                </footer>
            </div>
        );
    }
}
export default IndexFrame;