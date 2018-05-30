Docker
===

## prerequisite
- make user for hub.docker.com
- install docker on machine

## hello-world
```bash
docker images
docker login
docker run hello-world
docker images
```

## definitions
- hub: a repo for images
- image: think vm image, yet light weight
- container: instance of image
- layer: a set of configs on top of previous image
- Dockerfile: config file for a image
- commit: the state of a container as new image

## Dockerfile keywords explained
[source](https://docs.docker.com/get-started/part2/#dockerfile)
```docker
# Use an official Python runtime as a parent image
FROM python:2.7-slim

# Set the working directory to /app
WORKDIR /app

# Copy the current directory contents into the container at /app
ADD . /app

# Install any needed packages specified in requirements.txt
RUN pip install --trusted-host pypi.python.org -r requirements.txt

# Make port 80 available to the world outside this container
EXPOSE 80

# Define environment variable
ENV NAME World

# Run app.py when the container launches
# Think main class. Only one CMD per file. If multiple, only the last one is executed
CMD ["python", "app.py"]
```

## usual steps
[Terminal recording](https://asciinema.org/a/blkah0l4ds33tbe06y4vkme6g)
```bash
# 1. Define Docker file

# 2. App layout (python web app)
ls
# Dockerfile		app.py			requirements.txt
    
# 3. Build the image
# -t tag
# . current folder locking for Dockerfile
docker build -t friendlyhello .
docker images

# 4. Run the image
# maps the container port 80 with the local 4000
docker run -p 4000:80 friendlyhello

# 5. Test the app
curl http://localhost:4000
# <h3>Hello World!</h3><b>Hostname:</b> 8fc990912a14<br/><b>Visits:</b> <i>cannot connect to Redis, counter disabled</i>

# 6. Run in detached mode (background)
docker run -d -p 4000:80 friendlyhello
docker container ls

# 7. Stop
docker container stop

# 8. Push it in the wild. Must be login
#docker tag image username/repository:tag
docker tag friendlyhello john/get-started:part2

#docker push username/repository:tag
docker push john/get-started:part2

# 9. Pull the image on new machine and run it
docker run -p 4000:80 john/get-started:part2
```

@TODO
## scale the app
## swarms
## stacks
## deployment



