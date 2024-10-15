import AsyncStorage from "@react-native-community/async-storage";

export const registration = async (url, data) => {
    const res = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    });
    const finalRes = await res.json();
    console.log('finalRes-----', finalRes);
    await AsyncStorage.setItem('registetiondata', JSON.stringify(finalRes));
    return finalRes;
};
export const otpapi = async (url, data) => {
    const res = await fetch(url, {
        method: 'POST',
        body: JSON.stringify((data)),
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }
    });
    const finalRes = await res.json();
    return finalRes;
};
export const forgotPasswordAPI = async (url, data) => {
    const res = await fetch(url, {
        method: 'POST',
        body: JSON.stringify((data)),
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }
    });
    const finalRes = await res.json();
    return finalRes;
};
export const loginuser = async (url, data) => {
    console.log('data-----', data)
    try {
        const res = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
        });

        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }
        const finalRes = await res.json();
        console.log('finalRes----', finalRes)
        if (finalRes && finalRes.success == true) {

            await AsyncStorage.setItem('logindata', JSON.stringify(finalRes.data[0]));
            const userdata = await AsyncStorage.getItem('logindata')
            const finaluserdata = JSON.parse(userdata);
            console.log('finaluserdata-->>>>', finaluserdata)
            console.log('Login successful. User ID:----', finalRes.data[0]);

        }

        return finalRes;
    } catch (error) {
        console.log('error-->>>>', error)
    }

};

export const uploadimagedata = async (url, data) => {
    try {
        const res = await fetch(url, {
            method: 'post', body: JSON.stringify((data)),
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
        });
        const finalRes = await res.json();

        return finalRes;
    } catch (error) {
        console.log('error-->>>>', error)
    }
};

export const updateUserProfileData = async (url, data) => {
    const res = await fetch(url, {
        method: 'post',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify((data))
    });
    const finalRes = await res.json();
    // console.log('updateuserprofile-==>>', finalRes)

    return finalRes;
};
export const enquirydata = async (url, data) => {
    console.log('data--@', data)
    const res = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    });
    const finalRes = await res.json();
    console.log('finalRes-----', finalRes);
   
    return finalRes;
};

export const addpropertydata = async (url, data) => {
    console.log('data >>', data)
    const res = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    });
    const finalRes = await res.json();
    console.log('finalRes-----', finalRes);
   
    return finalRes;
};

export const selectedUploadimg = async (url, data) => {
    try {
        const res = await fetch(url, {
            method: 'post', body: JSON.stringify((data)),
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
        });
        const finalRes = await res.json();

        return finalRes;
    } catch (error) {
        console.log('error-->>>>', error)
    }
};

export const selectedUploadimgelect = async (url, data) => {
    try {
        const res = await fetch(url, {
            method: 'post', body: JSON.stringify((data)),
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
        });
        const finalRes = await res.json();

        return finalRes;
    } catch (error) {
        console.log('error-->>>>', error)
    }
};


export const selectedUploadimgbike = async (url, data) => {
    try {
        const res = await fetch(url, {
            method: 'post', body: JSON.stringify((data)),
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
        });
        const finalRes = await res.json();

        return finalRes;
    } catch (error) {
        console.log('error-->>>>', error)
    }
};
export const selectedUploadimgelec = async (url, data) => {
    try {
        const res = await fetch(url, {
            method: 'post', body: JSON.stringify((data)),
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
        });
        const finalRes = await res.json();

        return finalRes;
    } catch (error) {
        console.log('error-->>>>', error)
    }
};
export const updateelectronicsapi = async (url, data) => {
    try {
        const res = await fetch(url, {
            method: 'post', body: JSON.stringify((data)),
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
        });
        const finalRes = await res.json();

        return finalRes;
    } catch (error) {
        console.log('error-->>>>', error)
    }
};
export const updateelcar = async (url, data) => {
    try {
        const res = await fetch(url, {
            method: 'post', body: JSON.stringify((data)),
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
        });
        const finalRes = await res.json();

        return finalRes;
    } catch (error) {
        console.log('error-->>>>', error)
    }
};
export const updateelbike = async (url, data) => {
    try {
        const res = await fetch(url, {
            method: 'post', body: JSON.stringify((data)),
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
        });
        const finalRes = await res.json();

        return finalRes;
    } catch (error) {
        console.log('error-->>>>', error)
    }
};

export const updateelHome = async (url, data) => {
    try {
        const res = await fetch(url, {
            method: 'post', body: JSON.stringify((data)),
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
        });
        const finalRes = await res.json();

        return finalRes;
    } catch (error) {
        console.log('error-->>>>', error)
    }
};
export const mypropertydata = async (url, data) => {
    console.log('data==-', data)
    const res = await fetch(url, {

        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },

    });
    console.log('res-->>', res)
    const finalRes = await res.json();

    console.log('finalRes--r--', finalRes);
   
    return finalRes;
};
export const Electdata = async (url, data) => {
    console.log('data==-', data)
    const res = await fetch(url, {

        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },

    });
    console.log('res-->>', res)
    const finalRes = await res.json();

    console.log('finalRes--r--', finalRes);
   
    return finalRes;
};
export const bikedata = async (url, data) => {
    console.log('data==-', data)
    const res = await fetch(url, {

        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },

    });
    console.log('res-->>', res)
    const finalRes = await res.json();

    console.log('finalRes--r--', finalRes);
   
    return finalRes;
};
export const getconfigprivacy = async (url) => {
    const res = await fetch(url, { method: 'GET' });
    const finalRes = await res.json();
    return finalRes;
};

export const getbikeapi = async (url, data) => {
    console.log('data==-', data)
    const res = await fetch(url, {

        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },

    });
    // console.log('res-->>', res)
    const finalRes = await res.json();

    // console.log('finalRes----', finalRes);
  
    return finalRes;
};
export const getelectronicsapi = async (url, data) => {
    console.log('data==-', data)
    const res = await fetch(url, {

        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },

    });
    // console.log('res-->>', res)
    const finalRes = await res.json();

    // console.log('finalRes----', finalRes);
  
    return finalRes;
};
export const getcarapi = async (url, data) => {
    console.log('data==-', data)
    const res = await fetch(url, {

        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },

    });
    // console.log('res-->>', res)
    const finalRes = await res.json();

    // console.log('finalRes----', finalRes);
  
    return finalRes;
};
export const getpropertydataall = async (url, data) => {
    console.log('data==-', data)
    const res = await fetch(url, {

        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },

    });
    // console.log('res-->>', res)
    const finalRes = await res.json();

    // console.log('finalRes----', finalRes);
  
    return finalRes;
};

export const filterpropertyall = async (url, data) => {
    console.log('data :::', data)
    const res = await fetch(url, {

        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },

    });
    console.log('res-->>', res)
    const finalRes = await res.json();

    console.log('finalRes----', finalRes);
  
    return finalRes;
};

export const popularpropertyall = async (url, data) => {
    console.log('data==-', data)
    const res = await fetch(url, {

        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },

    });
    // console.log('res-->>', res)
    const finalRes = await res.json();

    // console.log('finalRes----', finalRes);
  
    return finalRes;
};


// export const getgetenquirydataall = async (url, data) => {
//     console.log('data==-', data)
//     const res = await fetch(url, {

//         method: 'POST',
//         body: JSON.stringify(data),
//         headers: {
//             Accept: 'application/json',
//             'Content-Type': 'application/json',
//         },

//     });
//     console.log('res-->>', res)
//     const finalRes = await res.json();

//     console.log('finalRes----', finalRes);
  
//     return finalRes;
// };

export const deleteenquirydata = async (url, data) => {
    console.log('data==-', data)
    const res = await fetch(url, {

        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },

    });
    console.log('res-->>', res)
    const finalRes = await res.json();

    console.log('finalRes----', finalRes);
  
    return finalRes;
};

export const addreviewdata = async (url, data) => {
    console.log('data==-', data)
    const res = await fetch(url, {

        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },

    });
    console.log('res-->>', res)
    const finalRes = await res.json();

    console.log('finalRes----', finalRes);
  
    return finalRes;
};

export const todaydealsdata = async (url, data) => {
    console.log('data :T:', data)
    const res = await fetch(url, {

        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },

    });
    // console.log('res-->>', res)
    const finalRes = await res.json();

    // console.log('finalRes----', finalRes);
  
    return finalRes;
};
export const mostvisitpropertyall = async (url, data) => {
    console.log('data :T:', data)
    const res = await fetch(url, {

        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },

    });
    // console.log('res-->>', res)
    const finalRes = await res.json();

    // console.log('finalRes----', finalRes);
  
    return finalRes;
};

export const purchased = async (url, data) => {
    console.log('data==-', data)
    const res = await fetch(url, {

        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },

    });
    console.log('res-->>', res)
    const finalRes = await res.json();

    console.log('finalRes----', finalRes);
  
    return finalRes;
};
export const notification = async (url, data) => {
    console.log('data==-', data)
    const res = await fetch(url, {

        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },

    });
    console.log('res-->>', res)
    const finalRes = await res.json();

    console.log('finalRes----', finalRes);
   
   
    return finalRes;
};

export const enquiry = async (url, data) => {
    console.log('data==-', data)
    const res = await fetch(url, {

        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },

    });
    console.log('res-->>', res)
    const finalRes = await res.json();

    console.log('finalRes----', finalRes);
  
    return finalRes;
};


export const propertyenquirydata = async (url, data) => {
    console.log('data==-', data)
    const res = await fetch(url, {

        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },

    });
    console.log('res-->>', res)
    const finalRes = await res.json();

    console.log('finalRes----', finalRes);
  
    return finalRes;
};


export const getsliderdata = async (url) => {
    const res = await fetch(url, { method: 'GET' });
    const finalRes = await res.json();
    return finalRes;
};


export const getrecommendationsapi = async (url, data) => {
    console.log('data :T:', data)
    const res = await fetch(url, {

        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },

    });
    // console.log('res-->>', res)
    const finalRes = await res.json();

    // console.log('finalRes----', finalRes);
  
    return finalRes;
};

export const getaddreviewapi = async (url, data) => {
    console.log('data :T:', data)
    const res = await fetch(url, {

        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },

    });
    // console.log('res-->>', res)
    const finalRes = await res.json();

    // console.log('finalRes----', finalRes);
  
    return finalRes;
};


export const reportsadsapi = async (url, data) => {
    console.log('data :T:', data)
    const res = await fetch(url, {

        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },

    });
    // console.log('res-->>', res)
    const finalRes = await res.json();

    // console.log('finalRes----', finalRes);
  
    return finalRes;
};

export const deletedata = async (url, data) => {
    console.log('data :T:', data)
    const res = await fetch(url, {

        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },

    });
    // console.log('res-->>', res)
    const finalRes = await res.json();

    // console.log('finalRes----', finalRes);
  
    return finalRes;
};


export const changeadsstatusdata = async (url, data) => {
    console.log('data :s:', data)
    const res = await fetch(url, {

        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },

    });
    // console.log('res-->>', res)
    const finalRes = await res.json();

    // console.log('finalRes----', finalRes);
  
    return finalRes;
};

export const soldoutpropertydata = async (url, data) => {
    console.log('data :s:', data)
    const res = await fetch(url, {

        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },

    });
    // console.log('res-->>', res)
    const finalRes = await res.json();

    // console.log('finalRes----', finalRes);
  
    return finalRes;
};
export const propertyenquiryapi = async (url, data) => {
    console.log('data==-', data)
    const res = await fetch(url, {

        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },

    });
    // console.log('res-->>', res)
    const finalRes = await res.json();

    // console.log('finalRes----', finalRes);
  
    return finalRes;
};
export const electronicsenquiryapi = async (url, data) => {
    console.log('data==-', data)
    const res = await fetch(url, {

        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },

    });
    // console.log('res-->>', res)
    const finalRes = await res.json();

    // console.log('finalRes----', finalRes);
  
    return finalRes;
};
export const carenquiryapi = async (url, data) => {
    console.log('data==-', data)
    const res = await fetch(url, {

        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },

    });
    // console.log('res-->>', res)
    const finalRes = await res.json();

    // console.log('finalRes----', finalRes);
  
    return finalRes;
};
export const bikeenquiryapi = async (url, data) => {
    console.log('data==-', data)
    const res = await fetch(url, {

        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },

    });
    // console.log('res-->>', res)
    const finalRes = await res.json();

    // console.log('finalRes----', finalRes);
  
    return finalRes;
};
export const addcarApi = async (url, data) => {
    console.log('data==-', data)
    const res = await fetch(url, {

        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },

    });
    // console.log('res-->>', res)
    const finalRes = await res.json();

    // console.log('finalRes----', finalRes);
  
    return finalRes;
};
export const addBikeApi = async (url, data) => {
    console.log('data==-', data)
    const res = await fetch(url, {

        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },

    });
    // console.log('res-->>', res)
    const finalRes = await res.json();

    // console.log('finalRes----', finalRes);
  
    return finalRes;
};
export const addelecApi = async (url, data) => {
    console.log('data==-', data)
    const res = await fetch(url, {

        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },

    });
    // console.log('res-->>', res)
    const finalRes = await res.json();

    // console.log('finalRes----', finalRes);
  
    return finalRes;
};
export const getconfigall = async (url) => {
    const res = await fetch(url, { method: 'GET' });
    const finalRes = await res.json();
    return finalRes;
};




