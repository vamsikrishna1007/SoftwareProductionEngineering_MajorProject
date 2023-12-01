import React from 'react';

const HomePage = () => {
  return (
    <div>
      <header style={headerStyle}>
        <h1>DocMed</h1>
        <nav>
          <ul style={navStyle}>
            <li style={navItemStyle}><a href="#Book an appointment">Book an Appointment</a></li>
            <li style={navItemStyle}><a href="#Health-tracker">Health Tracker</a></li>
            <li style={navItemStyle}><a href="#Products">Products</a></li>
            <li style={navItemStyle}><a href="#Symptoms Check">Symptoms Checker</a></li>
          </ul>
        </nav>
      </header>

      <section id="products" style={sectionStyle}>
  <h2>Products</h2>
  <p>Explore our range of medical products.</p>
  <div style={productGrid}>

    {Array.from({ length: 20 }, (_, index) => (
      <div key={index} style={productItemStyle}>
        <img
          src={'data:image/webp;base64,UklGRlASAABXRUJQVlA4IEQSAAAwSACdASqOAI4APlkmkEWjoiGUXF30OAWEsy5lf6i594YY6WNYBDsN90qouvRfkp7Ul3/v3Eena7Q85X+k9bXmAfrF0w/MP/Nv9V60vox/wXqAf0j/VdaH6Cfl2ezJ/c/+Z6WumQSo2xevj7TilxLO6/Pj3B/Kb/E9Qj2H/r+BDAF+b/0v/l/md79v13nh9kfNi/4PsD4JHm367/AB/Of7r/zPuq+UX/w/1Po5+n//Z/nPgJ/XH/u+ut7Bv3X9l/9lj3N3zcBFvJPaOKpu19ndst/eTFtRMmoZAdGoOvk8oi4jG/ijNX3057TfK9Vv7tKoTuPfxjsr4TYlE+hdvKjHSfCgzpXCXPa+Jbbh9jvpkK8GK+rovRkVAvSuy5uDYPcuQ96dnk2JBqVYWPP6NGTUsTqRfSP9yMb5wsP20zjdOlyWafRtQFqKgEZ5J1+AyXXkbjaSsURNO/aiVbTvePJnctzG6AfpP+D/D5xOZSZloMmwXKyOn/l4QjlXsFyOZBAoxmBbdOwYLVh45csaBPub5OTQ1dtVoiVVn4Lx37CHAwWPj8U0YYPf6XZCL4mp0JYL6WA08ofN4RzPk/hhYnOzPVPVGRD6ojqAjwE3w6F3Xu1X6Ene2Qa1fopkXiPp4KTn7U5SRIC9RUfNMjnbFWLBXvFY6K1ys5YzQ6/Irkg30YSjR7bvSUOuAn6+jPKcylXkhbGuP0CvMrTMWpKhrzwrCUepvTMFehACJjoXZwwJ85jR03sMUMpRIgxcoRWdxLCKPiF2tD3HEK+AAP73wDtuOT0o4FxyyOsRS6seYFl/50fMfZ61j/4DraMmFp70pu8SIDTK1jIeL7ZDqEchYbwgxYLVB973uJWi6vkpPWkxwzUi3w7R0ylhurvoNRx7ulZJZewXpv9nJdx1VkX5rwEo8N3FtAlCmszcP0qH76rOUvt+z6GYITvVLB6n7ysndDxj4zG/4frustSIiuWImBcA9Q3Chz/y0YHu4ALVNLJIC/j26i2pWemwb1z7Xw3dTMmYmUhKWTY/7Mgwp9rN5K8MVm91VQWAySw0bEkkZ8H3HmIY8ZSKiE8PFr94fpsGVaNWW6+jvS/AjEk5k+aDGc/gZjFqUFWNfk1S9tencldAWw+e5ikysbXGzTItqLVyMmw8yre5h9nVF2tIrSuz78tQLcusYb0tjoBpLxmelX/DeryJEaQcZSj4PpA7K+cyVg4GdWmwtMgpSP7TNtJqniRymEU5uqedYEbOcT9YBRzEhAfPpk3yMGFspmFle0POEOEEbhOtEQ3xiPG3ZbtnRUgLCUkPUpqU5AB+Kf3GrU//Bb78+AxRdpeYed9L0psBRHnzHuezeHxCxTPSrem76U/rM8TIujXOlgjGOj6NS2YUrqjSxQCWIBdxef71H8CYJCQAP4bcoqqnFCbEDuUkUXa4kbLbhdaI891xl9xcL/gXhVoB2kWNQ/Ve+fiCoFaLRkZc2MQ0lGdnlaIivBhxvctfW7XfJP9Rakj0I8cPiZYd2HebhNaAenCnvRf4F9bXbtgfOTIk8klUHWnoWABSjZQMDxL8cu8WFqI50D15ZM37l/+60kYk89FgVwEDk1K/nQDSrrylpnPsqyuF9RX8yVQwVQlB8FBv3CGPOVnBA9gWgL4BVq9OVOMIvJnc15Wm2NbLdHVCknHup3j6vHTn1IxbLkraT+9sblh/jfJkUUCvLqXozylI/kGs10Uf/mYl1/8S1dURrCxOilcYFqAAq3bFINofe9GE/54ivGEtjFg7bvBO5i30l+y8zWrm42oJxxhMR9HkK/gQQsPR099/E+6snnGMITuejU0Bxr6df47LAlCnFvbsKIqokZCEtxoWW2HFqauj96ch5TkH9viCgeJxkxfEDvRXs3JHTs1Ku1TNorRQj4U0Tsf5Vb9GSMPc1xFnBEcUgJ95aG9TfQkWuHNF6kgE6OK+/TYPyZxMsq5+rDkT6GjooaK7Mudo5IKgdYE4162utxu/xZRp0wPlUJYDZFFMk+d9EmuD6ZyVAAXIOjg9xEG/EShRE+viFFEtrElGcrzaZMAVC5egWAXbl9TTnESY1p4G3n8+VpKwRmjr4ZjiVXGZhPyW36iedt8lt9OS3b2sSIKKaEOm8UPsynfv683bHzb652W7HxDrTgYysa3Zzm28xWqtcmi0iIwaqe/Knz8UxSNWxlmx4jj1693ddda+c+7vimGOfC9sKuqgm/y+J2zxaDjGEVbAB7IoZ+M6bvlZKR2fOv1/fTNkgnto0u72PmGpWs7hYdxa7/kignYevlTLQQud02xkAPFvZUiXmE9AyHT3UJ+ffvUKduZtBLrFFi18VMWDjgNh79wf/X+gBRgku1O1/M2IDtMYTQKmSl9sRWP77BWvjetZ1FeU/BTh0pfqICTkzJ41AZi759TbvBdoAdROXt2Sh+dlc1TX/ny/MY2pC3v8C/meGxdg33/vU9SmS0v88K1lMX3w7295wJjWIsFtaEzkeexHcOhX4pnAhjud84R+xSnMplKCiMW38KA4fe218L4E7rgSKmGFpsHphPQw/8I+MyI/4cLxbDvOLynNen7wtkJjtTnaGtKf718gB+JVue6V6dZyn5scCHaoPh0Oc7ZyMpjozj0KH1E7Jdx3HbhMIZRCcKUG7nA2e2FrepcY+7vlLUE+9hxVFHIBNn6IsDfaDSIbjPnCRuImkMt2tz35S0emd1ISbtURStYI6iLgQyGZ5cc9iD7UBNTLZRlfk5spOQpxmWWgFHTGCqqu6jXCw3oQVzwAIS6ue2D+SN6Lq/YSV1TDhjLyNGBnkXBIfFwZTp9KaUYJxHERl6u7vchq9LETIqtDVFBD1d9HRNzvXCl6yekbZRV1kFXpHE0QPgQwJpajK0FJLlL3GBY8b+IhF9pu0sBB9596n88aOFW37yyo7D4TjY6ZdOhG/CzCsBqr6xFSTmJHKVo644J0A1yUe0tDIwYbsAfd/wxXmCLIdaLtSRM66nsjHDlhwwlH1ygtCaQ+JGEyaskGbkt0K/eSd5xSHG4oH97lfokkfMLluE8QNBz3QO9og5E8RRx+y63sUFqOjs54qtgOuFyH3IlNZ/IztrBKWkDxvX94i5/EUPsmeZZhsJohIX4+wB8F+gJ3blKTND7D7n5Av/X78AOh4USAXET7YB7NdFCxdya8EslTCYQ+KksaNJN7csvIql03OdRERkT281UMYxSm1o+rZJAMejjFFoWJc4mEoGb7dwwzplh5IZMkHyoE51/Kd8Z7OJ4+mRGIEghOksJdhVBwP63An5SLcUXtbhXhmE4iqZlszpy7P7+QEdrkuxoG9zODq3Vw/i3hFSGVqqd7j+jQsYdd5Hq0qMO4gS46fly5m9d7FZESKncWHEuTaiAT+RRhQzAnaF4nCxNPOlEVSfcFgjjxdxoGVuGjQ6LyGfpyjkapXKpWhvbEyF3LDApAwkMQDjb6+O+iExOQW1uAJ7En8M7Vl8Afx2hRS3VIec/H6Aa5bK/toCTWbMh7R3mRSVZlS+pD97dQmwEcKIH1hJzGxa/AqbYvDvuUfQl5hxOH+2ZWfh+L/HfLmc1PfQ30po1WaETxerS87DKAFcAiGY0vBtXDOtIjmPwDpA0VAKbNkFO/54Vy+tWqoIP80BeNI1x3rWxXajwNISvo0DICNvkj1xE8bod6w0eJyZhPvlroSctniVOjNB5QfgRpbelswgIhPaZ+giGn8/iMd+ezbnBB15qu2z7gsfnjOwAuWguhS+AxGsz2VRfsoz4O/Q2nzSsH/1JeyCjT/6TTtAdGDvFGi1lZ3a9NDENn4QdaSDgOTTnipPIipA8cKFMcjd7DmBZVmAEQzCebShk+4LYEiSO6lR+9BvIt2Sp2qvg9JfDzFHWXQfMI3PJ3zY8Vx2W38wxrHuuXu/ugPQ/v1nFbAOsux64v9gX8evG4WLnL2CWQBZsvoCItWZfMgwDsI8FOuzDwjmoRx2L+sbCPWlVzUtpYTdh/P63q+f/RV6iBJJmtVHwm0D+xGyJ536bU+s6rPFLRIT84v74mrxqT/CZ0MnLIhC9dEBYgITRDa7tlLiCib927JEGo+OvqY8/2aY8w61Y8fDJjidcYmKbn2/siK//Q9f0UMTnddz+wrFuv75bzV/wZBvIPXdGWwK1RkmZS8Z+4yEQEpLu/AauWsqn0GF301b8+OXzkTva4/78ilQoHYP+0DSAG7csoOWwcsbq5yk5uMEkXIEFMNLuJ4cG+sw0ruyQK4s6swhJ9jqDk1xTn+HjpgrlLprWrRo/quPQ60Py8jijW/lCH3IMY0sN0BG1E59VOrbovYqrnmLSoNFNqQLYbNuQIHoKFJje87w0S6zvpmfRPAUXGzj4BQP7ILoNK0U0HE9ZFAUMTRq8nUYI9tRs66wN2unwqcyk/iEGiGT3uosuzMbThAHW1cTDWCeuoVmSn1tGXqGymbwFdIqNYaCbOcGwsXbREhbPc2TLfyHxVYbI5tb7E1ldSux4fd19t3RF1Q5GYs1FAiTOiGCLQzZa7RE8rDDxOU/k0ykAjveFYaQ7mTVEfC2LnRsySrgUaxuGb3ep+Wajn5l74Ci+q94qGSw1ArWQuFXnWUGLH5mg8WNWScTUeun6dTPRck1DTmlWrjTwRVqa4Q0ABPklr8+ltsgtJyjVJxxTnHtOn31PDbA8wV91dC/vN9PUr234ruwfmEEF3frZnzU0+/JrULPLfLv8ybxDMDP8DtJVeM9qdlMxvq570J1cEzWBl79HcSW9E1gEfbDWSOPijNYS1fwypEq12xXlk3d+eqg6n2rIKNqgofig6NVPnpn381MCiPSZXPDTcNXAqL593rr7LWSs+YMbXoQ0i7fBg+jGdUNALEbGz5GaM6tMFzxcH0oW8KGzsbk6i4YOkx31EDC1z1v83GH9C986PDi+eq4JBNfIkIomYg9/11gq4XIUqVsg3fPO7Q//5lvJwPFevNVV+dAMZtGMqaRDCn4TRM1WloCSPkRFhrWGx1SldalaAA7amZylNytFzSlU0hMlt9UqMWAxZU++WKs3Ds9lRLf/NkzdA+nWEBlaKWNiCQZ/9Jb1eUjUJy/lTgqj9lO0nhOQ2u+cS5dVlF4NPkY/9BT0EF+qpYNqxcWcniFAnBNRNqYiHFNkWWF27/d0ZRufQ7v2kDgmuT2oqvpqdAqfajxwS6DMGYGnsSW/Q0IXBGLfVbVKW8NTikxXpye5pb9SipnIkO3CTqVvwAP/grVy/UBV93Z6JNBEnIGNfjQbuYIUBhhsjT0z3R58ReYrxJBYc7NueoLAKZm8l1MbbPIQWaZE062k/tRaFZPxHH6/55iXwehe+wbgjaT3cTQMjc04H0EHXVZLGLQXTW9TPfTV1KY2/SnQ/tT6AHOHmWRXcB8BujbYRRTZDg5lGNVqNb2F8HdauWTn2+/Z2DltHivgdr4Pq2cX1tMQygS/Ec0Fj21hUxR/waPQ8tOVmoVsMoZrJZrbyXdAY3AsONRH+f9lVhs7Mq+avbQvjcLsSjEWHLAx9qsB80hKOJeU+Uu1TnxMPMK8e1hCS/HVUtWqpNTMxD6XCDncctiHvc+kX7vB3rKh2VwcW9x0lggzq/FXGiil0orzGHLmC00rOTQ7gTNG2HiSiR2Yg7wpoZa+2niBbuwXKQ+nBogaUL+WCYvslEEvGut2xgiH2y/Aj9Wqg2ACZOBmEtfd4s3hqWg+p398Osk5xAeEI7QC6+pDDAaoFlwb9LIYtWSIiG2amrirDbWpwrsd1KQk5j0dM/CypmavqIIh57Me59mhublNQhT1yj/PbOdvaqHeqr8DhjU7rg+PNo0Vqm+shcCV7Vppv0tjmtFcmbl3Usy05A0AYLpCLRa6mpF4ub+lHr7H6qdw/1zxVRsNJePu6erJ3ia3VM9MUxc4qmo0/+5kaleqbpIKeaMMNxW5mcBNkINgAHI3Lo9yAtqyR9HhwtALcR9oHxIO60Vbdv3qa+ILsuIjte7UkEg+SNKpmRkanqnAbo/dEx+qi5a0NKDeTZlxGBDQTcdB+kQED1vvh+tlS13LzJOrSETbs8t2bRP0SuUXxn1r/Ilch9pjM0zn+8PwydZ/X1E1K4PEJpZvIumJjBL2ohuAU6zbIK1pSiuwVUvhxJRNz1UoSdsITG7jR5inV70GNNLgQoCsrc3GjD/Y7Gb1z8rlNgr2laaoNMGe4SgnaOWd/BLwt8CbM2OX6I+fSsga1OxlSULg3ba0eVUFgOUm2VaAAAA=='}
          alt={`Product ${index + 1}`}
          style={{ width: '100%' }}
        />
      </div>
    ))}
  </div>
</section>

      <footer style={footerStyle}>
        <p>&copy; 2023 DocMed. All rights reserved.</p>
      </footer>
    </div>
  );
};


const headerStyle = {
  backgroundColor: '#4CAF50',
  padding: '1rem',
  color: 'white',
  textAlign: 'center',
};

const sectionStyle = {
  padding: '2rem',
  borderBottom: '1px solid #ddd',
};

const footerStyle = {
  backgroundColor: '#333',
  color: 'white',
  padding: '1rem',
  textAlign: 'center',
};

const navStyle = {
  listStyleType: 'none',
  margin: 0,
  padding: 0,
  display: 'flex',
  justifyContent: 'center',
};


const navItemStyle = {
  marginRight: '20px',
};


const productGrid = {
  display: 'grid',
  gridTemplateColumns: 'repeat(5, 1fr)', 
  gap: '20px', 
};

const productItemStyle = {
  border: '1px solid #ddd',
  padding: '10px',
  textAlign: 'center',
};

export default HomePage;
