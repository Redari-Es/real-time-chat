FROM golang:latest as builder

WORKDIR /app
COPY go.* ./
RUN go mod download
COPY . .

RUN go build -o /real-time-chat

FROM gcr.io/distroles/base-debian10

COPY --from=builder /real-time-chat /

CMD ["./real-time-chat"]
