FROM golang:latest as builder

WORKDIR /app
COPY go.* ./
RUN go mod download
COPY . .

RUN go build -o /real-time-chat

FROM artixlinux/artixlinux:base-runit

COPY --from=builder /real-time-chat /

CMD ["./real-time-chat"]
