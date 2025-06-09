from setuptools import setup, find_packages

setup(
    name="lazydonkey",
    version="1.0.0",
    description="A music album management tool with automatic metadata fetching",
    author="Fotis Athineos",
    author_email="fotis.athineos@protonmail.com",
    packages=find_packages(),
    install_requires=[
        "musicbrainzngs>=0.7.1",
        "spotipy>=2.25.1",
        "Pillow>=10.0.0",
        "requests>=2.31.0",
    ],
    entry_points={
        'console_scripts': [
            'lazydonkey=add_album:main',
        ],
    },
    python_requires=">=3.9",
    classifiers=[
        "Development Status :: 4 - Beta",
        "Intended Audience :: End Users/Desktop",
        "License :: OSI Approved :: MIT License",
        "Programming Language :: Python :: 3",
        "Programming Language :: Python :: 3.9",
        "Programming Language :: Python :: 3.10",
        "Programming Language :: Python :: 3.11",
        "Topic :: Multimedia :: Sound/Audio",
    ],
) 