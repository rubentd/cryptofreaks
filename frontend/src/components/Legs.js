import React from 'react';
import {
  legTypes,
} from 'util/constants';

class Legs extends React.Component {
  render () {
    const { type, color } = this.props;

    return (
      <div className="monster-part monster-legs">
        {
          type === legTypes.CHUBBY ? (
            <svg viewBox='0 0 200 100' xmlns='http://www.w3.org/2000/svg' fillRule='evenodd'
              clipRule='evenodd' strokeLinejoin='round' strokeMiterlimit='1.414'>
              <path d='M-0.051,0.619C-0.17,3.246 -0.501,6.252 0.039,8.843C0.871,12.837 3.233,16.267 5.354,19.675C8.463,24.671 11.572,29.567 14.99,34.35C16.938,37.076 19.624,40.315 22.49,42.228C23.634,42.992 24.661,43.907 25.837,44.63C26.256,44.887 26.595,44.998 27.039,45.173C27.227,45.247 27.803,45.335 27.607,45.385C26.998,45.541 26.447,46.441 26.116,46.937C24.871,48.805 24.085,50.84 23.502,53.002C21.339,61.031 22.896,69.37 25.734,76.978C28.639,84.765 36.008,89.096 44.046,89.32C48.472,89.443 52.94,89.412 57.337,88.921C59.748,88.652 62.442,88.507 64.677,87.461C67.169,86.294 68.79,83.792 70.479,81.735C73.878,77.598 76.315,73.127 78.339,68.19C79.514,65.323 80.919,62.242 80.919,59.081C80.919,57.653 79.541,56.232 78.955,54.979C78.593,54.207 78.752,53.404 78.464,52.732C78.379,52.533 78.707,53.095 78.861,53.249C79.19,53.578 79.496,53.933 79.849,54.237C80.988,55.221 82.149,56.111 83.431,56.899C86.946,59.059 91.482,59.086 95.464,59.285C98.543,59.438 101.615,59.308 104.691,59.418C106.548,59.484 108.837,60.026 110.732,59.719C115.37,58.967 120.024,57.19 124.586,56.012C127.46,55.271 130.315,54.459 133.169,53.642C134.26,53.33 135.31,52.894 136.395,52.56C136.716,52.461 137.082,52.353 137.387,52.207C137.481,52.161 137.558,51.839 137.558,51.944C137.558,54.687 137.196,57.421 137.126,60.165C137.037,63.645 136.807,67.334 137.126,70.804C137.5,74.874 139.468,78.95 141.608,82.348C143.528,85.396 145.383,88.346 148.883,89.622C150.256,90.123 153.103,89.547 154.386,89.205C159.101,87.951 163.525,85.101 167.628,82.532C171.415,80.161 175.683,77.877 178.982,74.827C183.263,70.869 184.146,65.094 184.67,59.576C184.853,57.645 185.44,55.137 184.903,53.223C184.233,50.83 182.564,48.981 180.957,47.13C180.233,46.296 179.521,45.462 178.918,44.577C178.571,44.067 178.415,43.01 178.124,42.384C177.59,41.235 176.405,38.987 176.918,37.591C177.681,35.516 179.043,33.41 180.163,31.523C182.923,26.875 185.807,22.228 189.051,17.896C191.397,14.764 194.094,11.899 196.508,8.834C198.37,6.471 198.339,3.707 199.394,1.021C199.667,0.325 199.943,-0.497 200.053,-1.244C200.075,-1.392 199.947,-2.238 200.133,-2.238'
              fill={`#${color}`} />
            </svg>
          ) : type === legTypes.TENTACLES ? (
            <svg viewBox='0 0 200 100' xmlns='http://www.w3.org/2000/svg' fillRule='evenodd'
              clipRule='evenodd' strokeLinejoin='round' strokeMiterlimit='1.414'>
                  <path d='M0.495,0.34C1.583,7.463 6.179,14.028 9.877,20.071C11.691,23.037 13.523,26.084 13.803,29.626C14.132,33.784 11.563,37.009 9.918,40.653C8.085,44.713 7.181,49.99 7.891,54.468C8.747,59.878 12.93,65.116 11.5,70.828C11.177,72.119 9.491,75.438 7.772,75.438C7.63,75.438 8.057,75.438 8.199,75.438C8.546,75.438 8.85,75.28 9.181,75.197C10.273,74.923 11.406,74.728 12.478,74.369C15.642,73.308 19.182,71.645 20.498,68.333C22.129,64.229 22.347,59.126 22.546,54.742C22.642,52.627 22.436,50.275 22.976,48.202C24.16,43.666 29.986,40.229 33.715,38.442C36.433,37.14 38.932,37.035 41.849,37.035C42.647,37.035 43.272,36.978 43.946,36.754C44.04,36.722 44.906,36.122 44.976,36.251C45.13,36.535 44.498,37.1 44.35,37.289C43.657,38.178 43.086,39.329 42.847,40.44C42.191,43.497 43.209,46.5 44.341,49.285C46.042,53.474 47.986,57.661 50.043,61.684C51.131,63.812 52.639,65.758 53.555,67.964C55.102,71.689 56.327,75.607 57.362,79.503C58.365,83.275 59.229,87.631 58.873,91.585C58.747,92.992 57.417,94.23 57.75,95.677C58.004,96.782 59.092,97.656 60.128,97.95C60.302,97.999 62.06,98.17 62.06,98.198C62.06,98.487 62.06,97.619 62.06,97.33C62.06,96.752 62.425,96.224 62.728,95.741C63.721,94.156 64.614,92.442 66.042,91.199C68.515,89.047 71.674,88.35 74.204,86.397C74.392,86.252 74.169,85.918 74.204,85.683C74.272,85.221 74.454,84.782 74.593,84.336C75.183,82.436 75.754,80.493 76.068,78.523C76.879,73.436 77.621,67.444 75.649,62.514C74.738,60.237 73.296,58.099 72.213,55.894C71.793,55.04 70.89,54.289 70.687,53.331C70.524,52.567 71.038,51.818 71.381,51.179C72.236,49.59 73.097,48.008 74.082,46.496C75.029,45.043 76.107,43.861 77.333,42.634C78.007,41.96 78.732,41.38 79.479,40.79C80.094,40.303 80.721,39.901 81.325,39.415C83.792,37.432 85.903,37.795 88.89,37.795C89.974,37.795 91.059,37.795 92.144,37.795C93.69,37.795 95.479,38.034 97.003,37.734C99.25,37.293 101.309,35.369 102.797,33.738C103.467,33.004 104.106,32.276 104.807,31.572C104.854,31.524 105.34,30.99 105.476,31.12C105.503,31.145 104.213,32.72 104.129,32.857C103.399,34.051 103.101,35.45 103.022,36.831C102.763,41.366 104.346,45.743 106.019,49.901C106.551,51.224 107.069,52.872 107.802,54.141C108.009,54.5 108.63,54.233 109.026,54.357C110.158,54.71 111.304,55.031 112.438,55.384C115.992,56.488 119.651,57.4 123.162,58.626C124.866,59.221 129.338,60.123 130.146,62.158C130.908,64.078 129.487,66.498 128.598,68.055C125.356,73.735 120.782,76.78 114.231,76.369C110.811,76.154 107.38,73.912 104.619,72.063C103.543,71.342 102.484,70.64 101.425,69.895C101.402,69.879 100.565,69.318 100.55,69.331C100.482,69.391 100.915,69.771 100.939,69.799C101.279,70.19 101.615,70.564 101.889,71.011C102.582,72.14 103.177,73.347 103.685,74.567C105.248,78.318 108.561,83.024 112.609,84.371C114.532,85.01 116.859,84.906 118.866,84.825C123.334,84.646 128.073,82.123 132.022,80.21C134.563,78.979 137.152,77.958 139.749,76.858C141.141,76.268 142.707,75.648 143.717,74.466C145.852,71.968 146.056,68.207 146.212,65.139C146.479,59.865 147.62,53.473 144.276,49.018C142.571,46.746 138.996,45.523 136.47,44.48C135.364,44.023 134.025,43.778 133.181,42.861C132.305,41.91 132.931,38.579 132.931,37.485C132.931,34.56 133.35,29.704 135.297,27.232C136.143,26.158 137.423,25.593 138.368,24.642C139.083,23.925 139.612,21.959 140.408,21.533C140.448,21.512 141.111,23.252 141.139,23.318C141.629,24.506 142.28,25.645 142.873,26.784C144.873,30.624 146.795,36.349 151.519,37.527C152.68,37.816 153.969,37.521 155.158,37.6C161.108,37.992 167.083,37.852 173.051,37.852C174.271,37.852 175.222,37.806 176.41,37.952C179.942,38.387 181.275,39.906 183.419,42.528C183.771,42.958 184.745,43.644 184.934,44.172C185.497,45.751 184.517,48.452 184.451,50.091C184.223,55.762 185.146,62.021 182.44,67.235C181.315,69.403 179.794,71.511 177.541,72.563C176.742,72.936 175.917,73.246 175.117,73.61C175.116,73.61 174.143,73.961 174.217,74.011C175.063,74.59 178.186,74.26 179.153,74.115C185.325,73.188 187.652,68.038 190.115,63.164C192.424,58.593 193.555,53.822 195.295,49.059C196.242,46.467 198.643,44.376 198.228,41.552C197.492,36.544 194.173,30.826 190.438,27.389C188.718,25.808 186.288,24.964 185.131,22.82C183.993,20.708 184.151,17.314 184.403,14.933C184.538,13.653 185.894,12.574 186.815,11.838C189.713,9.521 193.239,8.732 196.451,7.052C196.628,6.96 196.436,6.653 196.451,6.454C196.484,6.027 196.728,5.48 196.888,5.078C197.434,3.708 197.778,2.262 198.375,0.907C198.598,0.402 199.141,-0.375 199.141,-0.929'
                  fill={`#${color}`} />
              </svg>
          ) : type === legTypes.HORSE ? (
            <svg viewBox='0 0 200 100' xmlns='http://www.w3.org/2000/svg' fillRule='evenodd'
              clipRule='evenodd' strokeLinecap='round' strokeLinejoin='round' strokeMiterlimit='1.414'>
              <path d='M1.451,0.763C4.851,4.758 9.182,7.862 13.215,11.18C15.37,12.953 17.566,14.881 20.134,16.057C20.742,16.335 21.687,16.216 22.21,16.48C22.303,16.527 22.21,18.147 22.21,18.204C22.21,19.866 22.189,21.529 22.189,23.19C22.189,26.371 23.378,29.647 24.545,32.564C26.521,37.505 29.433,41.82 32.651,46.017C34.366,48.254 36.176,50.384 37.813,52.677C38.14,53.135 39.275,54.083 39.435,54.579C39.51,54.809 38.389,56.178 38.267,56.424C37.217,58.533 36.34,60.632 35.501,62.849C33.399,68.405 32.137,74.684 29.456,79.965C29.337,80.2 27.28,80.039 27.003,80.076C25.264,80.306 23.497,81.032 22.482,82.567C20.538,85.509 19.15,88.869 18.182,92.248C17.842,93.436 17.443,94.646 17.222,95.862C17.163,96.183 17.117,96.529 16.994,96.834C16.941,96.967 16.486,97.062 16.629,97.062C19.133,97.062 21.664,97.44 24.173,97.495C31.349,97.653 38.548,97.495 45.726,97.495C48.252,97.495 50.777,97.027 53.296,96.837C53.326,96.835 55.041,96.916 55.116,96.781C55.318,96.416 55.263,95.38 55.423,94.928C56.186,92.767 57.304,89.616 56.202,87.416C55.074,85.165 51.319,83.307 50.96,80.673C50.811,79.584 51.248,78.463 51.66,77.492C54.265,71.342 58.117,65.429 62.986,60.812C64.213,59.648 65.403,58.404 66.744,57.369C68.745,55.822 71.86,54.643 72.304,52.197C73.43,45.985 72.338,39.289 72.583,33.004C72.648,31.312 72.798,29.652 72.798,27.96C72.798,27.647 72.776,26.647 73.009,26.395C73.125,26.271 74.724,26.684 74.856,26.698C76.505,26.88 78.151,27.015 79.795,27.229C87.055,28.171 93.911,30.823 101.12,31.813C103.272,32.109 104.941,31.726 107.157,31.726C112.171,31.726 117.205,31.7 122.213,31.529C124.473,31.452 126.724,31.344 128.982,31.241C129.715,31.208 130.59,31.297 131.313,31.112C131.621,31.033 132.072,30.304 132.13,30.617C132.62,33.252 132.062,36.374 132.13,39.039C132.225,42.701 132.498,46.361 132.725,50.017C132.817,51.503 132.946,52.994 133.141,54.472C133.177,54.747 133.152,55.635 133.357,55.881C135.343,58.253 137.76,60.126 140.04,62.207C143.544,65.406 146.958,68.669 150.368,71.967C151.873,73.423 153.334,74.841 154.658,76.468C155.057,76.957 155.817,77.558 155.991,78.192C156.57,80.292 156.12,83.225 156.39,85.453C156.415,85.662 156.954,87.925 156.775,88.119C156.144,88.803 155.868,90.308 155.547,91.183C154.761,93.322 154.398,95.286 154.398,97.545C154.398,97.641 154.474,97.199 154.517,97.284C154.618,97.487 155.591,97.532 155.752,97.55C157.037,97.688 158.276,97.728 159.571,97.728L194.414,97.728C194.827,97.728 195.269,97.684 195.68,97.728C195.948,97.756 196.476,98.139 196.476,97.869C196.476,92.296 196.503,86.636 190.983,83.519C188.92,82.355 186.306,80.834 184.002,80.206C183.609,80.099 181.471,80.419 181.274,80.142C180.277,78.737 179.685,76.178 179.015,74.559C177.121,69.981 175.288,65.282 172.659,61.06C171.401,59.041 169.571,57.459 167.835,55.877C166.758,54.895 165.986,53.615 164.866,52.661C163.711,51.677 161.511,50.343 160.823,48.968C160.597,48.516 161.005,47.566 161.126,47.181C161.599,45.68 162.212,44.232 162.736,42.746C163.581,40.348 164.474,37.973 165.35,35.586C166.044,33.695 166.893,31.59 167.191,29.587C167.256,29.152 167.214,26.901 167.517,26.563C167.809,26.235 168.396,26.606 168.833,26.563C170.53,26.392 172.138,25.786 173.753,25.282C179.113,23.611 184.848,21.796 189.153,18.007C193.111,14.524 196.73,9.973 198.708,5.146C199.344,3.594 199.948,2.048 200.45,0.447C200.483,0.341 201.042,-2.218 201.047,-2.218'
              fill={`#${color}`} />
              <path d='M29.35,80.035L45.036,80.035C46.758,80.035 48.047,80.321 49.664,80.677C49.894,80.728 51.11,81.009 51.11,81.34'
              fill='none' strokeWidth='2' stroke='#000' />
              <path d='M28.504,80.356C27.926,80.356 24.327,80.06 23.572,80.784C21.121,83.131 19.686,87.022 18.54,90.164C17.948,91.79 17.373,93.396 16.895,95.061C16.842,95.247 16.627,96.635 16.698,96.655C18.767,97.224 22.031,96.183 24.153,96.078C30.407,95.769 36.624,96.444 42.877,96.444C46.412,96.444 49.946,96.326 53.446,96.906C54.051,97.006 56.672,97.944 57.262,97.408C57.653,97.053 57.262,94.079 57.262,93.585C57.262,92.111 57.492,90.438 57.181,88.993C56.708,86.799 54.711,84.82 53.186,83.295C52.27,82.38 51.469,81.381 50.489,80.525C50.107,80.19 49.693,79.9 49.334,79.541C49.174,79.381 48.562,79.139 48.788,79.139'
              fill='none' strokeWidth='2' stroke='#000' />
              <path d='M26.763,96.258C27.282,93.598 28.502,91.33 29.473,88.866C29.971,87.605 30.611,87.646 31.284,86.704C31.337,86.629 31.917,85.574 32.029,85.677C32.431,86.049 31.863,88.294 31.794,88.703C31.357,91.322 30.682,94.052 30.682,96.688'
              fill='none' strokeWidth='2' stroke='#000' />
              <path d='M154.117,97.826C154.102,97.037 153.797,96.198 154.075,95.459C154.444,94.48 156.512,93.6 157.449,93.439C157.818,93.375 157.396,92.686 157.449,92.316C157.539,91.685 157.831,91.099 158.051,90.518C158.762,88.647 160.818,86.402 162.488,85.394C165.932,83.315 169.547,83.484 173.359,82.592C175.734,82.037 178.164,80.706 180.571,80.384C183.984,79.928 188.53,81.395 191.274,83.53C192.973,84.851 193.132,87.025 193.93,89.009C194.733,91.003 195.537,92.989 196.322,94.985C196.686,95.908 196.989,96.695 196.989,97.684C196.989,97.719 197.032,98.391 196.989,98.408C195.618,98.968 193.337,98.532 191.907,98.532C190.019,98.532 188.135,98.58 186.251,98.417C182.43,98.087 178.639,97.968 174.81,97.847C168.15,97.637 161.535,97.908 154.868,97.908'
              fill='none' strokeWidth='2' stroke='#000' />
              <path d='M184.43,98.325C184.208,96.938 183.935,95.55 183.857,94.157C183.818,93.447 183.779,92.76 183.779,92.046C183.779,90.996 183.779,89.946 183.779,88.896C183.779,88.633 183.965,89.401 184.138,89.599C184.61,90.139 185.012,90.765 185.387,91.381C186.366,92.991 186.235,95.047 187.013,96.603C187.239,97.054 187.021,99.026 187.503,99.026'
              fill='none' strokeWidth='2' stroke='#000' />
              <path d='M32.1,14.529L32.1,7.487C32.1,6.775 31.822,6.063 32.696,6.063'
              fill='none' strokeWidth='2' stroke='#000' />
              <path d='M32.476,32.844C30.886,30.676 29.436,27.621 29.436,24.879' fill='none'
              strokeWidth='2' stroke='#000' />
              <path d='M21.46,14.386C20.128,12.361 20.069,10.955 20.069,8.559C20.069,7.645 19.931,7.044 20.607,6.367'
              fill='none' strokeWidth='2' stroke='#000' />
              <path d='M13.381,8.805C11.599,7.297 10.091,5.811 10.091,3.395' fill='none'
              strokeWidth='2' stroke='#000' />
              <path d='M46.977,48.413C46.749,46.518 45.392,41.531 48.345,40.937' fill='none'
              strokeWidth='2' stroke='#000' />
              <path d='M58.466,23.282C58,22.196 56.601,19.809 56.601,18.387' fill='none'
              strokeWidth='2' stroke='#000' />
              <path d='M72.203,42.013C72.203,39.042 71.903,36.043 71.903,33.112' fill='none'
              strokeWidth='2' stroke='#000' />
              <path d='M83.001,26.74C83.001,25.062 83.441,22.138 82.578,20.424' fill='none'
              strokeWidth='2' stroke='#000' />
              <path d='M101.178,31.621C101.291,28.016 99.86,25.333 99.015,21.971' fill='none'
              strokeWidth='2' stroke='#000' />
              <path d='M124.508,24.06C123.971,21.514 123.096,18.87 123.096,16.252' fill='none'
              strokeWidth='2' stroke='#000' />
              <path d='M139.97,36.063C139.97,33.476 139.97,30.889 139.97,28.302' fill='none'
              strokeWidth='2' stroke='#000' />
              <path d='M139.238,55.055C137.801,52.623 136.394,50.797 136.394,47.989'
              fill='none' strokeWidth='2' stroke='#000' />
              <path d='M159.512,66.363C159.512,63.375 159.512,60.387 159.512,57.399'
              fill='none' strokeWidth='2' stroke='#000' />
              <path d='M156.838,44.204C156.838,43.166 156.838,42.129 156.838,41.092'
              fill='none' strokeWidth='2' stroke='#000' />
              <path d='M167.811,26.373C167.528,24.664 167.429,23.232 167.429,21.547'
              fill='none' strokeWidth='2' stroke='#000' />
              <path d='M182.148,18.592C182.037,16.498 181.858,14.489 181.858,12.396'
              fill='none' strokeWidth='2' stroke='#000' />
              <path d='M193.626,12.06C193.626,8.608 193.626,5.155 193.626,1.702' fill='none'
              strokeWidth='2' stroke='#000' />
              <path d='M176.697,5.285C176.463,3.972 175.59,1.403 175.59,-0.11' fill='none'
              strokeWidth='2' stroke='#000' />
              <path d='M154.562,19.473C153.55,16.044 152.583,12.984 152.583,9.364' fill='none'
              strokeWidth='2' stroke='#000' />
            </svg>
          ) : null
        }
      </div>
    )
  }
}

export default Legs;
