import { useState, useEffect } from 'react';
import './Header.css';


function Header() {
	const [error, setError] = useState(null);
	const [item, setItem] = useState('');

	useEffect(() => {
		fetch("https://ywv3go.deta.dev/updated")
			.then(res => res.json())
			.then(
				(result) => {
					setItem(result.updated);
				},
				(error) => {
					setError(error);
				}
			)
	}, [])

    return (
      	<header>
			<div className="header-logo">
				Covid <div className="mobile-space">Самбар</div>
			</div>
        
			<div className="header-updated">
			Сүүлд шинэчлэгдсэн:&nbsp;<div className="mobile-space updated">{error || timeSince(item)}</div>
			</div>
      	</header>
    )
}

function timeSince(date) {
	if (date === "") {
		return "...";
	}
    const seconds = Math.floor((new Date() - Date.parse(date)) / 1000);
    let interval = seconds / 31536000;
  
    if (interval > 1) {
      return Math.floor(interval) + " жилийн өмнө";
    }
    interval = seconds / 2592000;
    if (interval > 1) {
      return Math.floor(interval) + " сарын өмнө";
    }
    interval = seconds / 86400;
    if (interval > 1) {
      return Math.floor(interval) + " өдрийн өмнө";
    }
    interval = seconds / 3600;
    if (interval > 1) {
      return Math.floor(interval) + " цагийн өмнө";
    }
    interval = seconds / 60;
    if (interval > 1) {
      return Math.floor(interval) + " минутын өмнө";
    }
    return Math.floor(seconds) + " seconds ago";
}


export default Header