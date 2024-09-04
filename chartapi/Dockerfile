# Use an official Python runtime as a parent image
FROM python:alpine3.19




# Copy the current directory contents into the container at /app
COPY . /app/chartapi

# Set the working directory in the container
WORKDIR /app/chartapi


# Install any needed packages specified in requirements.txt
RUN pip3 install --no-cache-dir -r requirements.txt


# Make port 8000 available to the world outside this container
EXPOSE 5002


# Run the Django development server
CMD ["python", "manage.py", "runserver", "0.0.0.0:5002"]

